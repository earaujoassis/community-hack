using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Entities
{
  public class Quiz
  {
    public int Id { get; set; }

    public IList<Options> Options { get; set; } = new List<Options>();

    public IList<int> CorrectOptionsIds { get; set; } = new List<int>();
  }
}
