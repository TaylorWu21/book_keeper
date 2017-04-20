class Api::CommentsController < ApplicationController

  def index
    user_id = Book.find(params[:book_id]).user_id
    render json: { 
      comments: Book.find(params[:book_id]).comments, 
      book: Book.find(params[:book_id]),
      user: User.find(user_id)
    }
  end

  def create
    @comment = Book.find(params[:book_id]).comments.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: { error: @comment.errors.full_messages.join(' ') }, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:comment_id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: 422
    end

  end

  def destroy
    Comment.find(params[:comment_id]).destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:message, :user_id)
  end

end
