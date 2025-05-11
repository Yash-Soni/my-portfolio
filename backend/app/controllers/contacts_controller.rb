class ContactsController < ApplicationController
  # include ActionController::HttpAuthentication::Basic::ControllerMethods
  # http_basic_authenticate_with name: "admin", password: "password", only: :index

  def index
    @contacts = Contact.all.order(created_at: :desc)
    render json: @contacts
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      render json: { 
        status: 'success',
        message: 'Contact created successfully',
        contact: @contact
      }, status: :created
    else
      render json: { 
        status: 'error',
        message: 'Failed to create contact',
        errors: @contact.errors 
      }, status: :unprocessable_entity
    end
  end


  private

  def contact_params
    params.require(:contact).permit(:name, :email, :phone, :message)
  end  
  
end

