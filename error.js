class Error {
    static BadInput = {
        message: "Invalid input. Please check your input and try again."
    }
    static PasswordMatchError = {
        message: "Your password's didn't match. Please try again."
    }
    static RegistrationError = {
        message: "Currently we can't register users. Please try again or Contact with support team."
    }
    static EmailExists = {
        message: "Email already exists."
    }
    static PasswordHashingError = {
        message: "Something went wrong while creating your account. Please try again later."
    }
    static LoginCreditentalsNotFound = {
        message: "Login Creditentals not found. Please try again or Register."
    }
    static LoginError = {
        message: "Currently we are unable to answer your login request. Please try again later or Contact with support team."
    }
    static TokenVerificationError = {
        message: "Currently we are unable to verify your token. Please try login again or Contact with support team."
    }
    static GatheringUserInfoError = {
        message: "Currently we are unable to gather user information. Please refresh page and try again later or Contact with support team."
    }
    static GatheringBooksError = {
        message: "Currently we are unable to gather book information. Please refresh page and try again later"
    }
    static CreateShelfError = {
        message: "Something occurred while creating a new shelf. Please try again later or contact support team."
    }
    static ShelfSearchError = {
        message: "We couldn't find this shelf. Please try again later or contact support team."
    }
    static CreateBookError = {
        message: "We couldn't create this book at this moment. Please try again later or contact support team."
    }
    static GatheringCommentsError = {
        message: "Currently we're unable to gather comments for this shelf. Please try again later or contact support team."
    }
}

module.exports = Error