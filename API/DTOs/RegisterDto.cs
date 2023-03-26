using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
	public class RegisterDto
	{
        [Required]
		public string Email { get; set; }

        [Required]
        [EmailAddress]
        public string Password { get; set; }

        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", ErrorMessage = "Please choose a valid password between 4 - 8.")]
        public string DisplayName { get; set; }
        public string UserName { get; set; }
    }
}

