# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151218160833) do

  create_table "categories", force: true do |t|
    t.string   "name"
    t.integer  "user_id"
    t.string   "description"
    t.integer  "category_id"
    t.boolean  "is_published"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "cities", force: true do |t|
    t.string   "name"
    t.integer  "user_id"
    t.string   "description"
    t.integer  "category_id"
    t.boolean  "is_published"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "clients", force: true do |t|
    t.string   "name"
    t.integer  "address_id"
    t.integer  "order_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "countires", force: true do |t|
    t.string   "name"
    t.integer  "code"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "customers", force: true do |t|
    t.string "name"
  end

  create_table "customers_new", force: true do |t|
    t.string   "name"
    t.integer  "user_id"
    t.string   "description"
    t.integer  "category_id"
    t.boolean  "is_published"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "customers_products", id: false, force: true do |t|
    t.integer "customer_id", null: false
    t.integer "product_id",  null: false
  end

  create_table "dm_dnets", force: true do |t|
    t.integer  "segment_id"
    t.decimal  "min_order_amt",                  precision: 10, scale: 2
    t.integer  "min_order_qty",        limit: 8
    t.decimal  "total_file_amt",                 precision: 10, scale: 2
    t.integer  "total_file_qty"
    t.integer  "currency_cdlk_id"
    t.boolean  "company_size",                                            default: false
    t.boolean  "phone",                                                   default: false
    t.boolean  "enchanced",                                               default: false
    t.boolean  "sic_industry",                                            default: false
    t.boolean  "name_home_address",                                       default: false
    t.boolean  "gender",                                                  default: false
    t.boolean  "email",                                                   default: false
    t.boolean  "title_slugging",                                          default: false
    t.boolean  "job_title",                                               default: false
    t.boolean  "job_function",                                            default: false
    t.boolean  "change_address",                                          default: false
    t.integer  "change_address_qty",   limit: 8
    t.boolean  "hotline",                                                 default: false
    t.integer  "hotline_qty",          limit: 8
    t.integer  "gender_male_pct",      limit: 3
    t.integer  "gender_female_pct",    limit: 3
    t.integer  "age_average",          limit: 3
    t.integer  "age_from",             limit: 3
    t.integer  "age_to",               limit: 3
    t.decimal  "average_unit_of_sale",           precision: 5,  scale: 2
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "dm_dnets", ["segment_id"], name: "index_dm_dnets_on_segment_id"

  create_table "dnt_formats", force: true do |t|
    t.integer  "segment_id"
    t.string   "image_accepted_flag",               limit: 1, null: false
    t.string   "flash_accepted_flag",               limit: 1, null: false
    t.string   "rich_media_accepted_flag",          limit: 1, null: false
    t.string   "video_accepted_flag",               limit: 1, null: false
    t.string   "preroll_accepted_flag",             limit: 1, null: false
    t.string   "midroll_accepted_flag",             limit: 1, null: false
    t.string   "postroll_accepted_flag",            limit: 1, null: false
    t.string   "overlay_accepted_flag",             limit: 1, null: false
    t.string   "iab_vast_certified_accepted_flag",  limit: 1, null: false
    t.string   "iab_vpaid_certified_accepted_flag", limit: 1, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "dnt_formats", ["segment_id"], name: "index_dnt_formats_on_segment_id"

  create_table "dnt_platforms", force: true do |t|
    t.integer  "segment_id"
    t.string   "desktop_accepted_flag",      limit: 1, null: false
    t.string   "mobile_accepted_flag",       limit: 1, null: false
    t.string   "tablet_accepted_flag",       limit: 1, null: false
    t.string   "connected_tv_accepted_flag", limit: 1, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "dnt_platforms", ["segment_id"], name: "index_dnt_platforms_on_segment_id"

  create_table "fasts", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "holds", force: true do |t|
    t.string   "name"
    t.datetime "date"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "its", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "keywords", force: true do |t|
    t.string   "keyword"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "locations", force: true do |t|
    t.string   "name"
    t.string   "country"
    t.integer  "party_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  add_index "locations", ["user_id"], name: "index_locations_on_user_id"

  create_table "micro_posts", force: true do |t|
    t.string  "name"
    t.integer "length"
    t.integer "emp_code"
  end

  create_table "orders", force: true do |t|
    t.string  "name"
    t.integer "customer_id"
  end

  create_table "orders_new", force: true do |t|
    t.string   "name"
    t.integer  "user_id"
    t.string   "description"
    t.integer  "category_id"
    t.boolean  "is_published"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "patients", force: true do |t|
    t.string   "name"
    t.text     "address"
    t.integer  "cycles"
    t.integer  "years"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "posts", force: true do |t|
    t.string   "name"
    t.integer  "user_id"
    t.string   "description"
    t.integer  "category_id"
    t.boolean  "is_published"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "products", force: true do |t|
    t.string   "name"
    t.integer  "user_id"
    t.string   "description"
    t.integer  "category_id"
    t.boolean  "is_published"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "products_new", force: true do |t|
    t.string   "name"
    t.integer  "user_id"
    t.string   "description"
    t.integer  "category_id"
    t.boolean  "is_published"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.integer  "manager_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "address_id"
  end

end
