class ContactMailer < ApplicationMailer
  default to: 'ciprian.d.crisan@gmail.com'

  def contact_email(contact_message)
    @contact_message = contact_massage
    mail(subject: "New Contact Message from #{contact_message.full_name}")
  end
end
