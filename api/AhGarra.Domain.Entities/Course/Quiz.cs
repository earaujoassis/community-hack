using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Entities
{
  public class Quiz
  {
    public string Title { get; set; }

    public IList<Option> Options { get; set; } = new List<Option>();

    public IList<int> CorrectOptionsIds { get; set; } = new List<int>();
  }
}
