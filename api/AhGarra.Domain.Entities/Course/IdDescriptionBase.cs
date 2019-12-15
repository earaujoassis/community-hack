using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Entities
{
  public abstract class IdDescriptionBase
  {
    public int Id { get; set; }

    public string Description { get; set; }
  }
}
