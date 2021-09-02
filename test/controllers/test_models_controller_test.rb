require "test_helper"

class TestModelsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get test_models_index_url
    assert_response :success
  end

  test "should get new" do
    get test_models_new_url
    assert_response :success
  end

  test "should get create" do
    get test_models_create_url
    assert_response :success
  end
end
