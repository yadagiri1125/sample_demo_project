class InviteCorporateUsersMailer < ActionMailer::Base
  default :from => "from@example.com"

  def invite_corporate_users(user)
    @user = user
    mail(:to => @user.email, :subject => 'Sample Email')
  end

end
