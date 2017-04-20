class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :message, null: false
      t.integer :user_id, null: false
      t.belongs_to :book

      t.timestamps
    end
  end
end
