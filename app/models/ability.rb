class Ability
  include CanCan::Ability

  def initialize(user)
    if user.is_system_admin?
      can :manage, [Bank, UserProfile, CiCompany, UserInvitation]
    end
    if user.is_bank_admin?
      can :manage, [Bank, UserProfile, UserInvitation]
      can :read, CiCompany
    end
    if user.is_banking_professional?
      can :read, UserProfile
      can :read, Bank
    end
    if user.is_cic_admin?
      can :manage, [UserProfile, CiCompany, UserInvitation]
    end
    if user.construction_inspector?
      can :read, UserProfile
      can :read, CiCompany
    end
  end
end
