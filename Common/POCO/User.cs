using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Common.Enum;
using System.ComponentModel.DataAnnotations;

namespace Common.POCO
{
    public class User : IBaseEntity
    {
        public int ID { get; set; }

        public byte? SystemStatus { get; set; }

        [Required]
        [StringLength(12, ErrorMessage = "登录账号长度小于12位。", MinimumLength = 2)]
        [Display(Name = "登录账号")]
        [RegularExpression("^[a-zA-Z0-9]{2,12}$", ErrorMessage = "请输入字母或数字。")]
        public string LoginName { get; set; }

        [Required]
        [StringLength(12, ErrorMessage = "密码长度大于6为并且小于12位。", MinimumLength = 6)]
        [Display(Name = "登录密码")]
        [RegularExpression("^[a-zA-Z0-9]{6,12}$", ErrorMessage = "请输入字母或数字。")]
        public string LoginPwd { get; set; }

        [Required]
        [StringLength(12, ErrorMessage = "昵称长度小于12位。", MinimumLength = 1)]
        [Display(Name = "昵称")]
        public string Name { get; set; }

        [Display(Name = "邮箱")]
        public string Email { get; set; }

        [Display(Name = "性别")]
        public Sex Sex { get; set; }

        public virtual ICollection<Blog> Blogs { get; set; }
    }
}
