import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import kotlin.random.Random

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            GuessTheNumberGame()
        }
    }
}

@Composable
fun GuessTheNumberGame() {
    var targetNumber by remember { mutableStateOf(Random.nextInt(1, 101)) }
    var userGuess by remember { mutableStateOf("") }
    var message by remember { mutableStateOf("") }
    var attempts by remember { mutableStateOf(0) }

    fun checkGuess(guess: Int) {
        attempts++
        when {
            guess < targetNumber -> message = "Загаданное число больше"
            guess > targetNumber -> message = "Загаданное число меньше"
            else -> message = "Поздравляем! Вы угадали число за $attempts попыток"
        }
    }

    fun resetGame() {
        targetNumber = Random.nextInt(1, 101)
        userGuess = ""
        message = ""
        attempts = 0
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(text = "Угадай число от 1 до 100")
        TextField(
            value = userGuess,
            onValueChange = { userGuess = it },
            label = { Text("Ваше число") },
            modifier = Modifier.padding(8.dp)
        )
        Button(
            onClick = {
                val guess = userGuess.toIntOrNull()
                if (guess != null) {
                    checkGuess(guess)
                } else {
                    message = "Введите корректное число"
                }
            },
            modifier = Modifier.padding(8.dp)
        ) {
            Text(text = "Проверить")
        }
        Text(text = message, modifier = Modifier.padding(8.dp))
        Text(text = "Попыток: $attempts", modifier = Modifier.padding(8.dp))
        Button(
            onClick = { resetGame() },
            modifier = Modifier.padding(8.dp)
        ) {
            Text(text = "Новая игра")
        }
    }
}
