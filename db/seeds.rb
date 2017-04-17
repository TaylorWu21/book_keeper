# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

20.times do
  User.create(
    email: Faker::Internet.email, 
    name: Faker::Name.name, 
    phone: Faker::PhoneNumber.cell_phone,
    avatar_url: "https://res.cloudinary.com/taylorwu21/image/upload/v1492281597/person.png",
    password: "password"
  )
end

User.all.each do |user|
  10.times do
    Book.create(
      title: Faker::Book.title,
      author: Faker::Book.author,
      description: Faker::Lorem.paragraph(2),
      image: "https://res.cloudinary.com/taylorwu21/image/upload/v1492371686/sample.jpg",
      category: Faker::Book.genre,
      isbn: Faker::Number.number(10),
      user_id: user.id
    )
  end
end

puts "seed completed"