import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useTranslations } from '../translations/translations';

export function ContactPage() {
  const { language } = useAccessibility();
  const t = useTranslations(language);

  return (
    <div className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl mb-4 text-foreground">
            {t.contact.title}
          </h1>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
          <p className="mt-4 text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl mb-6 text-foreground">{t.contact.contactInfo}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="mb-1 text-foreground">{t.contact.address}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {t.contact.addressContent}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="mb-1 text-foreground">{t.contact.phone}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {t.contact.phoneContent}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="mb-1 text-foreground">{t.contact.email}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {t.contact.emailContent}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="mb-1 text-foreground">{t.contact.hours}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {t.contact.hoursContent}
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-64 bg-muted border border-border flex items-center justify-center">
              <p className="text-muted-foreground">{t.contact.mapPlaceholder}</p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl mb-6 text-foreground">{t.contact.sendMessage}</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm text-foreground">
                    {t.contact.name} <span className="text-gray-400">{t.contact.required}</span>
                  </label>
                  <Input
                    type="text"
                    placeholder={t.contact.nameRequired}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-foreground">
                    {t.contact.phoneLabel} <span className="text-gray-400">{t.contact.required}</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder={t.contact.phoneRequired}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm text-foreground">
                  {t.contact.emailLabel} <span className="text-gray-400">{t.contact.required}</span>
                </label>
                <Input
                  type="email"
                  placeholder={t.contact.emailRequired}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-foreground">
                  {t.contact.subject} <span className="text-gray-400">{t.contact.required}</span>
                </label>
                <Input
                  type="text"
                  placeholder={t.contact.subjectRequired}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-foreground">
                  {t.contact.message} <span className="text-gray-400">{t.contact.required}</span>
                </label>
                <Textarea
                  placeholder={t.contact.messageRequired}
                  className="w-full min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black py-6">
                {t.contact.send}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}