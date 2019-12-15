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
  [Route("api/[controller]")]
  public class CourseController : Controller
  {
    private readonly ICourseService _courseService;
    public CourseController(ICourseService courseService)
    {
      _courseService = courseService;
    }

    [HttpGet]
    public IList<CourseBasicInformationDTO> GetAllCoursesBasicInformation()
    {
      return this._courseService.GetAllCourseBasicInformation();
    }
  }
}
