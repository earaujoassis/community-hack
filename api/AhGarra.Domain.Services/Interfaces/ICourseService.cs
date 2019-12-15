using AhGarra.Domain.Entities.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Services.Interfaces
{
  public interface ICourseService
  {
    IList<CourseBasicInformationDTO> GetAllCourseBasicInformation();
  }
}
