using AhGarra.Domain.Entities;
using AhGarra.Domain.Entities.Enums;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AhGarra.Domain.Repositories.Impl.Context
{
  public class ApplicationContext : DbContext
  {
    public IList<Card> Cards { get; set; } = new List<Card>();
    public IList<Course> Courses { get; set; } = new List<Course>();
    public IList<Option> Options { get; set; } = new List<Option>();
    public IList<Quiz> Quizes { get; set; } = new List<Quiz>();

    public ApplicationContext()
    {
      SeedData();
    }

    public void SeedData()
    {
      CargaSistema();
    }

    public void CargaSistema()
    {
      CreateNewCourse().ForEach(c => Courses.Add(c));
    }

    private List<Course> CreateNewCourse()
    {
      var course1 = new Course
      {
        Id = 1,
        Name = "Lógica de programação",
        Cards = new List<Card>
                {
                  new Card{
                    Id = 1,
                    Description = "1) O que é?\n2) Como funciona?\n3) Qual Objetivo?",
                    Order = 1,
                    Titulo = "Perguntas"
                  },
                  new Card{
                    Id = 2,
                    Description = "É um treinamento online com um conjunto de pequenos cartões que guiam o você por conteúdo para aprender programação.",
                    Order = 2,
                    Titulo = "O que é?"
                  },
                  new Card{
                    Id = 3,
                    Description = "O treinamento pode ser acessado pelo site num PC ou direto no seu celular. É só fazer uma cadastro rápido e começar a aprender e acumular pontos cumprindo tarefas.",
                    Order = 3,
                    Titulo = "Como funciona?"
                  },
                  new Card{
                    Id = 4,
                    Description = "Estimular o aprendizado de programação de forma lúdica, divertida, online e gratuita.",
                    Order = 4,
                    Titulo = "Qual Objetivo?"
                  }
                },
        Description = "Dê seus primeiros passos de maneira prática e inicie na programação no seu celular.",
        Quiz = new Quiz { CorrectOptionsIds = new List<int> { 1, 2, 3 }, Options = new List<Option>
        {
          new Option { Id = 1, Description = "Tenha um celular, PC, Tablet ou notebook." },
          new Option { Id = 2, Description = "Leia os cartões e responda o Quiz" },
          new Option { Id = 3, Description = "Criar um cadastro gratuito no Ah!Garra" },
          new Option { Id = 4, Description = "Aprender inglês" },
          new Option { Id = 5, Description = "Saber matemática" }
        } },
        CourseStatus = CourseStatus.NotInitiated
      };

      return new List<Course> { course1 };
    }
  }
}
