using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Entities.DTO
{
  public class CourseContentDTO
  {
    public int CourseId { get; set; }

    public IList<CardDTO> Cards { get; set; }

    public QuizDTO Quiz { get; set; }
  }
}
