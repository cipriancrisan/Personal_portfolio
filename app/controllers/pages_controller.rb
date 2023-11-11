class PagesController < ApplicationController
  def home
    @contact_message = ContactMessage.new
  end

  def contact
    @contact_message = ContactMessage.new(contact_message_params)

    if @contact_message.valid?
      ContactMailer.contact_email(@contact_message).deliver_now
      redirect_to root_path, notice: 'Your message has been sent!'
    else
      render :index
    end
  end

  private

  def contact_message_params
    params.require(:contact_message).permit(:full_name, :email, :subject, :message)
  end
end
