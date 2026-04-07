import { useState, type FormEvent } from 'react'
import { useLocale } from '../../i18n/LocaleContext'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined
  const { locale } = useLocale()
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function validate(data: ContactFormData): FormErrors {
    const newErrors: FormErrors = {}

    if (!data.name.trim()) {
      newErrors.name = locale === 'tr' ? 'Ad soyad zorunludur.' : 'Full name is required.'
    } else if (data.name.trim().length < 2) {
      newErrors.name = locale === 'tr' ? 'Ad soyad en az 2 karakter olmalıdır.' : 'Full name must be at least 2 characters.'
    }

    if (!data.email.trim()) {
      newErrors.email = locale === 'tr' ? 'E-posta zorunludur.' : 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = locale === 'tr' ? 'Geçerli bir e-posta adresi giriniz.' : 'Please enter a valid email address.'
    }

    if (!data.subject.trim()) {
      newErrors.subject = locale === 'tr' ? 'Konu zorunludur.' : 'Subject is required.'
    }

    if (!data.message.trim()) {
      newErrors.message = locale === 'tr' ? 'Mesaj zorunludur.' : 'Message is required.'
    } else if (data.message.trim().length < 10) {
      newErrors.message = locale === 'tr' ? 'Mesaj en az 10 karakter olmalıdır.' : 'Message must be at least 10 characters.'
    }

    return newErrors
  }

  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }))
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitError(null)

    const newErrors = validate(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (!WEB3FORMS_KEY) {
      setSubmitError(
        locale === 'tr'
          ? 'Form servisi ayarlı değil. Lütfen VITE_WEB3FORMS_KEY ekleyin.'
          : 'Form service is not configured. Please add VITE_WEB3FORMS_KEY.',
      )
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject:
            locale === 'tr'
              ? `Portfolyo Iletisim Formu - ${formData.subject}`
              : `Portfolio Contact Form - ${formData.subject}`,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }),
      })

      const data = (await response.json()) as { success?: boolean; message?: string }
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Request failed')
      }

      setSubmitSuccess(true)
      setFormData(initialFormData)
    } catch {
      setSubmitError(
        locale === 'tr' ? 'Gonderim basarisiz. Lutfen tekrar deneyin.' : 'Submission failed. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-800 font-medium">
          {locale === 'tr' ? 'Mesajınız başarıyla gönderildi!' : 'Your message has been sent successfully!'}
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-4 text-sm text-green-600 underline"
        >
          {locale === 'tr' ? 'Yeni mesaj gönder' : 'Send another message'}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl" noValidate>
      {submitError && (
        <div className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
          {submitError}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          {locale === 'tr' ? 'Ad Soyad' : 'Full Name'}
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`w-full border rounded-xl px-3 py-2.5 ${
            errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } dark:bg-slate-800 dark:text-white`}
          placeholder={locale === 'tr' ? 'Adınız Soyadınız' : 'Your full name'}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          {locale === 'tr' ? 'E-posta' : 'Email'}
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full border rounded-xl px-3 py-2.5 ${
            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } dark:bg-slate-800 dark:text-white`}
          placeholder="example@mail.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          {locale === 'tr' ? 'Konu' : 'Subject'}
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          className={`w-full border rounded-xl px-3 py-2.5 ${
            errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } dark:bg-slate-800 dark:text-white`}
        >
          <option value="">{locale === 'tr' ? 'Konu seçiniz...' : 'Select subject...'}</option>
          <option value="genel">{locale === 'tr' ? 'Genel' : 'General'}</option>
          <option value="destek">{locale === 'tr' ? 'Teknik Destek' : 'Technical Support'}</option>
          <option value="oneri">{locale === 'tr' ? 'Öneri' : 'Suggestion'}</option>
          <option value="isbirligi">{locale === 'tr' ? 'İş Birliği' : 'Collaboration'}</option>
        </select>
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          {locale === 'tr' ? 'Mesaj' : 'Message'}
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`w-full border rounded-xl px-3 py-2.5 resize-y ${
            errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } dark:bg-slate-800 dark:text-white`}
          placeholder={locale === 'tr' ? 'Mesajınızı yazınız...' : 'Write your message...'}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-6 bg-violet-600 text-white py-2.5 rounded-xl font-medium hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (locale === 'tr' ? 'Gönderiliyor...' : 'Sending...') : locale === 'tr' ? 'Gönder' : 'Send'}
      </button>
    </form>
  )
}

