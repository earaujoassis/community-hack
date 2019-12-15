using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AhGarra.Domain.Entities.DTO;
using AhGarra.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AhGarra.Controllers
{
  [ApiController]
  [Route("api/[controller]/")]
  public class CourseController : Controller
  {
    private readonly ICourseService _courseService;
    public CourseController(ICourseService courseService)
    {
      _courseService = courseService;
    }

    [HttpGet]
    [Route("/GetAllCoursesBasicInformation")]
    public ActionResult GetAllCoursesBasicInformation()
    {
      return Ok(_courseService.GetAllCourseBasicInformation());
    }

    [HttpGet]
    [Route("/GetCourseCardsAndQuiz/{idCourse}")]
    public ActionResult GetCourseCardsAndQuiz([FromRoute]int idCourse)
    {
      return Ok(_courseService.GetCourseCardsAndQuiz(idCourse));
    }

    // TODO: Setar flag de concluído

    [HttpPut]
    [Route("/SetCourseStatus/{isCompleted}/{idCourse}")]
    public ActionResult SetCourseStatus(bool isCompleted, int idCourse)
    {
      _courseService.SetCourseStatus(isCompleted, idCourse);
      return Ok();
    }
  }
}
