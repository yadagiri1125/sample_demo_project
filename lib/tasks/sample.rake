require 'open-uri'
namespace :update_zip_codes do
      desc 'update senders email to @seniorleads.com'
  task :xml => :environment do

#efljmsdklf
#df,jskaldfj

 #      uri = URI.parse("http://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetAllZipCodes?country=US&key=B71MEA82AB73FBZH3WUB")
    # http = Net::HTTP.new(uri.host, uri.port)
    # http.use_ssl = true
    # @response = http.get("#{uri.path}?#{uri.query}")
   
    # xml = Nokogiri::XML(@response.body)
    # approved_element = xml.xpath('//approved').first
    # approved_element ? approved_element.inner_text : 0

    @request_zipcode = open("http://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetAllZipCodes?country=US&key=B71MEA82AB73FBZH3WUB").read
    @zip_codes = @request_zipcode.split(" ")
    @zip_codes.map!{ |element| element.gsub(/"/, '') }
    @zip_codes.map!{ |element| element.gsub(/,/, '') }
    $a = (@zip_codes.length - 1)
    @zip_codes.each_with_index do |zip_code,i|

        if i != 0 && i != $a
               @request_zip_details = open("http://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/#{zip_code}?key=B71MEA82AB73FBZH3WUB").read
            @zip_code_record = @request_zip_details.split(",")   
            @zip_code_record.map!{ |element| element.gsub(/"/, '') }
            @zip_code_record.map!{ |element| element.gsub(/,/, '') }
            @zip_code_record.map!{ |element| element.gsub(/\r\n/, '') }
            city = @zip_code_record[0].split(":").last
            state = @zip_code_record[1].split(":").last
            latitude = @zip_code_record[2].split(":").last
            longitude = @zip_code_record[3].split(":").last
            zip_code = @zip_code_record[4].split(":").last
            country = @zip_code_record[5].split(":").last.chomp('}')
            zip = ::ZipCode.find_by_code(zip_code) || ::ZipCode.new
                    zip.update_attributes(:city => city, :state => state, :latitude => latitude, :longitude => longitude, :zip_code => zip_code, :country => country)
                    zip.save!
            puts city
            puts "#{state}"
            puts latitude
            puts longitude
            puts zipCode
            puts country
        end
    end

    puts "he;oo"
  end
end