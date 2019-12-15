using AhGarra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Repositories.Interfaces
{
  public interface ICourseRepository
  {
    IEnumerable<Course> GetAllCourses();
  }
}
