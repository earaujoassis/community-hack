using AhGarra.Domain.Entities;
using AhGarra.Domain.Repositories.Impl.Context;
using AhGarra.Domain.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AhGarra.Domain.Repositories.Impl.Repositories
{
  public class CourseRepository : ICourseRepository
  {
    private readonly ApplicationContext _context;

    public CourseRepository(ApplicationContext context)
    {
      _context = context;
    }

    public IEnumerable<Course> GetAllCourses()
    {
      return this._context.Courses.AsEnumerable();
    }
  }
}
