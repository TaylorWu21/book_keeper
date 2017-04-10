class Api::BooksController < ApplicationController
  def index
    render json: current_user.books
  end

  def create
    @book = current_user.books.new(book_params)
    binding.pry
    if(@book.save)
      render json: @book
    else
      render json: { errors: model.errors.full_messages.join(' ') }, status: 422
    end
  end

  def destroy
    #DO SOMETHING HERE
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :description, :image, :category, :isbn)
  end
end
