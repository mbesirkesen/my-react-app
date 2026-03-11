import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Card } from '../components/Card'
import { Alert } from '../components/Alert'

export function UIKit() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          UI Kit
        </h1>

        {/* Buttons */}
        <section className="space-y-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="space-y-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 max-w-md">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Inputs
          </h2>
          <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />
          <Input
            id="ui-err"
            label="Hatalı Input"
            error="Bu alan zorunludur"
          />
          <Input
            id="ui-help"
            label="Help Text"
            type="email"
            helpText="E-posta adresinizi girin"
          />
          <Input
            id="ui-dis"
            label="Disabled"
            disabled
            value="Düzenlenemez"
          />
        </section>

        {/* Cards */}
        <section className="space-y-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" title="Elevated Card">
              Gölgeli kart.
            </Card>
            <Card variant="outlined" title="Outlined Card">
              Çerçeveli kart.
            </Card>
            <Card variant="filled" title="Filled Card">
              Dolgulu arka plan.
            </Card>
          </div>
        </section>

        {/* Alerts */}
        <section className="space-y-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Alerts
          </h2>
          <Alert variant="info" title="Bilgi">
            Bilgilendirme mesajı.
          </Alert>
          <Alert variant="success" title="Başarılı">
            İşlem tamamlandı.
          </Alert>
          <Alert variant="warning" title="Uyarı">
            Dikkat edilmesi gereken durum.
          </Alert>
          <Alert variant="error" title="Hata" dismissible>
            Bir hata oluştu.
          </Alert>
        </section>
      </div>
    </div>
  )
}


