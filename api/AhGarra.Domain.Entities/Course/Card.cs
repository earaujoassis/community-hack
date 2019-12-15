using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Entities
{
  public class Card : IdDescriptionBase
  {
    public string Titulo { get; set; }

    public Quiz Quiz { get; set; }

    public bool IsConcluded { get; set; }

    public int Order { get; set; }
  }
}
