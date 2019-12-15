using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Entities.DTO
{
  public class QuizDTO
  {
    public IList<OptionDTO> Options { get; set; }
  }
}
