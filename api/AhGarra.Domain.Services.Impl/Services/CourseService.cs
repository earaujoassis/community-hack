using System;
using System.Collections.Generic;
using System.Linq;
using AhGarra.Domain.Entities.DTO;
using AhGarra.Domain.Repositories.Interfaces;
using AhGarra.Domain.Services.Interfaces;

namespace AhGarra.Domain.Services.Impl.Services
{
  public class CourseService : ICourseService
  {
    private readonly ICourseRepository _courseRepository;

    public CourseService(ICourseRepository courseRepository)
    {
      _courseRepository = courseRepository;
    }

    public IList<CourseBasicInformationDTO> GetAllCourseBasicInformation()
    {
      return _courseRepository.GetAllCourses()
        .Select(c => new CourseBasicInformationDTO
        {
          Id = c.Id,
          Description = c.Description,
          Name = c.Name
        }).ToList();
    }
  }
}
