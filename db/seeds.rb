def create_or_update_by_alias(class_name, row)
  instance  = class_name.find_by_alias(row[:alias])
  if instance.blank?
    class_name.create!(row)
    puts "#{row[:name]}  added."
  else
    instance.update_attributes(row)
    puts "#{row[:name]} updated."
  end
  instance
end


# Roles
roles = [ { name: 'System Admin', alias: Role::SYSTEM_ADMIN },
          { name: 'Bank Admin', alias: Role::BANK_ADMIN },
          { name: 'Banking Professional', alias: Role::BANKING_PROFESSIONAL },
          { name: 'Construction Inspection Company Admin', alias: Role::CONSTRUCTION_INSPECTION_COMPANY_ADMIN },
          { name: 'Construction Inspector', alias: Role::CONSTRUCTION_INSPECTOR }
         ]


puts '------------Seeding Roles------------'
roles.each { |role| create_or_update_by_alias(Role, role)}
puts '-------------------------------------'

#================================================Create Default Users===================================================

def find_or_create_user(user_attrs)
  email = user_attrs[:email]
  user = User.find_by_email(email)

  if user.nil?
    user = User.create(user_attrs)
    puts "Created user having email #{email}"
  else
    puts "User having email #{email} already exists, thus not created"
  end
  user
end

system_admin = find_or_create_user({ email: 'system_admin@inspectdate.com', password: "test1234" })

def find_or_create_user_role(user, role)
  unless user.role.present?
    UserRole.create(role_id: role.id, user_id: user.id)
    puts "Created user roles for #{user.email}"
  else
    puts "User roles for #{user.email} already exists, thus not created"
  end
end
system_admin_role = Role.system_admin
user_role_for_system_admin = find_or_create_user_role(system_admin, system_admin_role)


def create_or_update_by_code(class_name,row)
  instance  = class_name.find_by_code(row[:code])
  if instance.blank?
    class_name.create!(row)
    puts "#{row[:name]}  added."
  else
    instance.update_attributes(row)
    puts "#{row[:name]} updated."
  end
  instance
end

countries = [ { code: 'US', name: 'United States' } ]

puts '------------Seeding Countries------------'
countries.each { |country| create_or_update_by_code(Country, country)}
puts '-------------------------------------'

states = [ { code: 'AR', name: 'Arkansas' },
           { code: 'DC', name: 'Washington' },
           { code: 'DE', name: 'Delaware' },
           { code: 'FL', name: 'Florida' },
           { code: 'GA', name: 'Georgia' },
           { code: 'KS', name: 'Kansas' },
           { code: 'LA', name: 'Louisiana' },
           { code: 'MD', name: 'Maryland' },
           { code: 'MO', name: 'Missouri' },
           { code: 'MS', name: 'Mississippi' },
           { code: 'NC', name: 'North Carolina' },
           { code: 'OK', name: 'Oklahoma' },
           { code: 'SC', name: 'South Carolina' },
           { code: 'TN', name: 'Tennessee' },
           { code: 'TX', name: 'Texas' },
           { code: 'WV', name: 'West Virginia' },
           { code: 'AL', name: 'Alabama' },
           { code: 'CT', name: 'Connecticut' },
           { code: 'IA', name: 'Iowa' },
           { code: 'IL', name: 'Illinois' },
           { code: 'IN', name: 'Indiana' },
           { code: 'ME', name: 'Maine' },
           { code: 'MI', name: 'Michigan' },
           { code: 'MN', name: 'Minnesota' },
           { code: 'NE', name: 'Nebraska' },
           { code: 'NH', name: 'New Hampshire' },
           { code: 'NJ', name: 'New Jersey' },
           { code: 'NY', name: 'New York' },
           { code: 'OH', name: 'Ohio' },
           { code: 'RI', name: 'Rhode Island' },
           { code: 'VT', name: 'Vermont' },
           { code: 'WI', name: 'Wisconsin' },
           { code: 'CA', name: 'California' },
           { code: 'CO', name: 'Colorado' },
           { code: 'NM', name: 'New Mexico' },
           { code: 'NV', name: 'Nevada' },
           { code: 'UT', name: 'Utah' },
           { code: 'AZ', name: 'Arizona' },
           { code: 'ID', name: 'Idaho' },
           { code: 'MT', name: 'Montana' },
           { code: 'ND', name: 'North Dakota' },
           { code: 'OR', name: 'Oregon' },
           { code: 'SD', name: 'South Dakota' },
           { code: 'WA', name: 'Washington' },
           { code: 'WY', name: 'Wyoming' },
           { code: 'HI', name: 'Hawaii' },
           { code: 'AK', name: 'Alaska' },
           { code: 'KY', name: 'Kentucky' },
           { code: 'MA', name: 'Massachusetts' },
           { code: 'PA', name: 'Pennsylvania' },
           { code: 'VA', name: 'Virginia' }
        ]

puts '------------Seeding States------------'
states.each { |state| create_or_update_by_code(State, state)}
puts '-------------------------------------'