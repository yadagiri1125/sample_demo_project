require 'test_helper'

class CountriesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get edit" do
    get :edit
    assert_response :success
  end

  test "should get sample" do
    get :sample
    assert_response :success
  end

  test "should get calculation" do
    get :calculation
    assert_response :success
  end

end
