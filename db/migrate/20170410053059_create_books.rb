class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :description
      t.string :image
      t.string :category
      t.string :isbn
      t.belongs_to :user

      t.timestamps
    end
  end
end
