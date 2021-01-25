
   var score_team2_2=0;
   var score_team1_1=0;
   var zapis=[];
   var all_text='';
   var all_text2='';
   document.getElementById('team1').value='';
   document.getElementById('team2').value='';

function tablo()
{
   var eggs1=0;
   var eggs2=0;
   var score_team2=0;
   var score_team1=0;
   var score=0;
   var pole_team1=0;
   var pole_team2=0;
   pole_team1=document.getElementById('team1').value;
   pole_team2=document.getElementById('team2').value;
   score=document.getElementById('game').value;
   score=parseInt(score);
   if(pole_team1=='' && parseInt(pole_team2)>=0)
    {
   pole_team2=parseInt(pole_team2);
      score_team1=score-pole_team2;
      score_team1_1+=score_team1;
      score_team2_2+=pole_team2;
      score_team2=score-score_team1;

    }
    else if(pole_team1=='Б' || pole_team1=='б')
    {
    	score_team1_1-=50;
    	score_team2_2+=score;
    	score_team1='Б';
    	score_team2=score;

    }
    else if(pole_team2=='Б' || pole_team2=='б')
    {
      score_team2_2-=50;
    	score_team1_1+=score;
    	score_team1=score;
    	score_team2='Б';
    }
    else if(pole_team1=='я')
    {
       eggs1=eggs2=score/2;
       score_team2_2+=eggs2;


    }
    else if(pole_team2=='я')
    {
       eggs1=eggs2=score/2;
       score_team1_1+=eggs1;


    }
    else 
    {
      pole_team1=parseInt(pole_team1);
      score_team1_1+=pole_team1;
      score_team2=score-pole_team1;
      score_team2_2+=score_team2;
      score_team1=pole_team1;

    }

    // Байты сделаны остались яйца и запись каждой партии снизу + возможность удалить партию если очки записаны неверно и небольшое оформление
   
all_text=score_team1 + ' ' + score_team2 + '\n';
all_text2=all_text2+all_text;
    document.getElementById('write').innerText=all_text2;
    document.getElementById('pole1').innerHTML=score_team1_1;
    document.getElementById('pole2').innerHTML=score_team2_2;
    document.getElementById('team1').value='';
    document.getElementById('team2').value='';
}