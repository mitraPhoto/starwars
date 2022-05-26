
$(document).ready(function()
{
$("#wiki").hide();
    $("#changechar").on("click",function()
    {
        $(this).text("Loading...");
        
            var rand=Math.floor(Math.random()*89)
            console.log(rand);
            var details={};
            $.get(`https://akabab.github.io/starwars-api/api/id/${rand}.json`,function(d)
            {
               details={
                  
                   "height":d.height,
                   "mass":d.mass,
                   "gender":d.gender,
                   "species":d.species,
                   "wiki":d.wiki,
                   "photo":d.image,
                   "name":d.name,
                   
                   
               }
      
               setTimeout(function()
               {
                   $("#wiki").show();
               {
                   $("#changechar").text("Find Next Character");
                  $("#content div img").attr("src",details.photo);
              
            
            $("#name").text(details.name);
            
            $("#details p").each(
                function(ind){

                    var idd=$(this).attr("id")
                    console.log(idd);
                   if(ind===4)
                   {
                       $(this).children("a").attr("href",details[idd]).attr("target","_blank");
                   }
                   else{
                   $(this).text(idd+" : "+details[idd]);
                   }
                   
                
            })
            }
        },3000)
      
    }
          )
        }
        )

}

)
