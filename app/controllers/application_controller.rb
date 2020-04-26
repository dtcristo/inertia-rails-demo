class ApplicationController < ActionController::Base
  after_action :set_xsrf_token_cookie

  inertia_share notice: -> { notice }

  private

  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

  def set_xsrf_token_cookie
    cookies['XSRF-TOKEN'] = form_authenticity_token
  end
end
