class Api::BooksController < ApplicationController
  skip_before_filter  :verify_authenticity_token
  
  def index
    render json: current_user.books
  end

  def create
    @book = current_user.books.new(book_params)
    if(@book.save)
      render json: @book
    else
      render json: { errors: @book.errors.full_messages.join(' ') }, status: 422
    end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
  end

  def user_library
    render json: { books: User.find(params[:id]).books, user: User.find(params[:id]) }
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :description, :image, :category, :isbn)
  end
end
