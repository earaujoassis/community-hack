using AhGarra.Domain.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Entities
{
  public class Course : IdDescriptionBase
  {
    public string Name { get; set; }

    public IList<Card> Cards { get; set; } = new List<Card>();

    public CourseStatus CourseStatus { get; set; }
  }
}
