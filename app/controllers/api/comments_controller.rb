class Api::CommentsController < ApplicationController

  def index
    user_id = Book.find(params[:book_id]).user_id
    comments = []
    Book.find(params[:book_id]).comments.each do |comment|
      comment = comment_json(comment)
      comments.push(comment)
    end
    render json: { 
      comments: comments, 
      book: Book.find(params[:book_id]),
      user: User.find(user_id)
    }
  end

  def create
    comment = Book.find(params[:book_id]).comments.new(comment_params)
    if comment.save
      render json: comment_json(comment)
    else
      render json: { error: comment.errors.full_messages.join(' ') }, status: 422
    end
  end

  def update
    comment = Comment.find(params[:comment_id])
    if comment.update(comment_params)
      render json: comment_json(comment)
    else
      render json: { errors: comment.errors }, status: 422
    end

  end

  def comment_json(comment)
    return {
      comment_id: comment.id,
      book_id: comment.book_id,
      user_id: comment.user_id,
      message: comment.message,
      username: User.find(comment.user_id).name,
      user_avatar_url: User.find(comment.user_id).avatar_url,
      created_at: comment.created_at.strftime("%B %d, %Y %I:%m %P"),
      updated_at: comment.updated_at.strftime("%B %d, %Y %I:%m %P")
    }
  end

  def destroy
    Comment.find(params[:comment_id]).destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:message, :user_id)
  end

end
