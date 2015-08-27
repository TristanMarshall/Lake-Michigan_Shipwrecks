# The purpose of this model is to create our API key
# rake db:migrate to create the new API keys table
class ApiKey < ActiveRecord::Base
# before_create generates a random
#access token string each time a record is created!
  before_create :generate_access_token

  validates :access_token, uniqueness: true 

  private # no one can see this

  def generate_access_token
#create hexadecimal string on request
    begin
      self.access_token = SecureRandom.hex
    end while self.class.exists?(access_token: access_token)
  end
end
