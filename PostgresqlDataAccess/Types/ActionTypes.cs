using System;
using System.Collections.Generic;
using System.Text;

namespace PostgresqlDataAccess
{
    /// <summary>
    /// Типы действий пользователя
    /// </summary>
    public enum ActionType
    {
        /// <summary>
        /// Добавление точки
        /// </summary>
        AddPoint,

        /// <summary>
        /// Удаление точки
        /// </summary>
        DeletePoint,

        /// <summary>
        /// Регистрация в базе
        /// </summary>
        Registration,

        /// <summary>
        /// Запрос на скачивание меток
        /// </summary>
        DownloadMarks,

        /// <summary>
        /// Попытка загрузки файла меток
        /// </summary>
        UploadMarks
    }
}
