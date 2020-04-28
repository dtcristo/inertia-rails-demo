class HighScoresController < ApplicationController
  before_action :set_high_score, only: %i[show edit update destroy]

  # GET /high_scores
  def index
    @high_scores = HighScore.all

    render inertia: 'high_score/index',
           props: {
             highScores:
               @high_scores.map { |high_score|
                 high_score.as_json(only: %i[id game score]).merge(
                   path: high_score_path(high_score),
                   editPath: edit_high_score_path(high_score)
                 )
               },
             createPath: new_high_score_path
           }
  end

  # GET /high_scores/1
  def show
    render inertia: 'high_score/show',
           props: {
             highScore:
               @high_score.as_json(only: %i[id game score]).merge(
                 path: high_score_path(@high_score),
                 editPath: edit_high_score_path(@high_score)
               ),
             indexPath: high_scores_path
           }
  end

  # GET /high_scores/new
  def new
    @high_score = HighScore.new

    render inertia: 'high_score/new',
           props: {
             highScore: @high_score.as_json(only: %i[game score]),
             createPath: high_scores_path,
             indexPath: high_scores_path
           }
  end

  # GET /high_scores/1/edit
  def edit
    render inertia: 'high_score/edit',
           props: {
             highScore:
               @high_score.as_json(only: %i[id game score]).merge(
                 path: high_score_path(@high_score),
                 updatePath: high_score_path(@high_score)
               ),
             indexPath: high_scores_path
           }
  end

  # POST /high_scores
  def create
    @high_score = HighScore.new(high_score_params)

    if @high_score.save
      redirect_to @high_score, notice: 'High score was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /high_scores/1
  def update
    if @high_score.update(high_score_params)
      redirect_to @high_score, notice: 'High score was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /high_scores/1
  def destroy
    @high_score.destroy
    redirect_to high_scores_url,
                notice: 'High score was successfully destroyed.'
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_high_score
    @high_score = HighScore.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def high_score_params
    params.require(:high_score).permit(:game, :score)
  end
end
