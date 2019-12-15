using System;
using System.Collections.Generic;
using System.Linq;
using AhGarra.Domain.Entities.DTO;
using AhGarra.Domain.Entities.Enums;
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

    public CourseContentDTO GetCourseCardsAndQuiz(int idCourse)
    {
      var course = _courseRepository.GetAllCourses().Single(c => c.Id == idCourse);
      var courseContent = new CourseContentDTO
      {
        CourseId = course.Id,
        Cards = course.Cards.Select(c => new CardDTO
        {
          Id = c.Id,
          Description = c.Description,
          Order = c.Order,
          Title = c.Title
        }).ToList(),
        Quiz = new QuizDTO
        {
          Options = course.Quiz.Options.Select(o => new OptionDTO { Id = o.Id, Description = o.Description }).ToList()
        }
      };
      courseContent.Cards = course.Cards.Select(c => new CardDTO { Id = c.Id, Description = c.Description, Order = c.Order, Title = c.Title }).ToList();

      course.CourseStatus = CourseStatus.InProgress;

      return courseContent;
    }

    public void SetCourseStatus(bool isCompleted, int idCourse)
    {
      _courseRepository.GetAllCourses().Single(c => c.Id == idCourse).CourseStatus = CourseStatus.Concluded;
    }
  }
}
