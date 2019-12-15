using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Entities.DTO
{
  public class CardDTO : IdDescriptionBase
  {
    public string Title { get; set; }

    public int Order { get; set; }
  }
}
