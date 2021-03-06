import React from  'react'
export const Description=()=>{
    return(
    <div>
        <h2>Задание №1</h2>
        <p>Разработать многопользовательское ASP.Net MVC приложения с одной страницей. </p>
        <p>На странице необходимо разместить поле для ввода имени пользователя. В центре страницы разместить
            графическую область. По нажатию левой клавиши мыши по этой области в место нажатия устанавливается маркер.
            Когда установлено больше одного маркера, по полю начинает двигаться объект. Объект движется плавно по прямой от 1-го
            маркера ко 2-му, от 2-го к 3-ему и т.д. После достижения последнего маркера объект движется к первому и так по кругу.
            Необходимо реализовать возможность сброса одного или всех маркеров. </p>
        <p>Изменения, сделанные пользователем, отображаются всем пользователям «в прямом эфире»,
            (т.е. если один пользователь установил маркер в своей графической области, то данный маркер появляется и у другого пользователя).</p>
        <p>Последние 20 действий, совершенные пользователями, должны сохраняться в PostgreSQL базу данных и отображаться на странице,
            с возможностью отсортировать действия по времени и по имени пользователя, совершившего эти действия.</p>
        <p>Реализовать сохранение и загрузку текущего положение меток на компьютер в любом формате.</p>
            <p>Визуальное представление маркера и интерактивного объекта по желанию. Наличие хотя бы минимального дизайна приветствуется.</p>
    </div>
    )
}
