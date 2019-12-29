const Book = require("../models/BookModel");
const { body,validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const auth = require("../middlewares/jwt");
var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

/*
function BookData(data) {
	this.id = data._id;
	this.title= data.title;
	this.description = data.description;
	this.isbn = data.isbn;
	this.createdAt = data.createdAt;
}

exports.bookList = [
	auth,
	function (req, res) {
		try {
			Book.find({user: req.user._id},"_id title description isbn createdAt").then((books)=>{
				if(books.length > 0){
					return apiResponse.successResponseWithData(res, "Operation success", books);
				}else{
					return apiResponse.successResponseWithData(res, "Operation success", []);
				}
			});
		} catch (err) {
			//throw error in json response with status 500. 
			return apiResponse.ErrorResponse(res, err);
		}
	}
];

*/
