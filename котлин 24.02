package com.example.myapplication

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.platform.LocalContext
import android.widget.Toast

@Composable
fun TaskItem(title: String, description: String, date: String) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp)
        ) {
            Text(text = title, fontSize = 18.sp, fontWeight = FontWeight.Bold)
            Spacer(modifier = Modifier.height(8.dp))
            Text(text = description, fontSize = 14.sp)
            Spacer(modifier = Modifier.height(8.dp))
            Text(text = date, fontSize = 12.sp, color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f))
        }
    }
}

@Composable
fun TaskList() {
    val context = LocalContext.current
    val tasks = listOf(
        Triple("Задача номер 3", "Небольшое описание к задаче, но оно не обязательно", "27.03.2020 в 13:36"),
        Triple("Задача номер 2", "А тут уставлен средний приоритет и дедлайн!", "19.02.2020 в 13:34"),
        Triple("Задача номер 2", "Для примера установлен низкий приоритет и не установлен дедлайн", "Бессрочно")
    )

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        tasks.forEach { task ->
            TaskItem(title = task.first, description = task.second, date = task.third)
            Spacer(modifier = Modifier.height(8.dp))
        }
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewTaskList() {
    TaskList()
}
