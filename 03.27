import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import kotlin.random.Random

@Composable
fun TicTacToeApp() {
    var board by remember {
        mutableStateOf(Array(3) {
            Array(3) { "" }
        })
    }

    var currentPlayer by remember { mutableStateOf("X") }
    var winner by remember { mutableStateOf<String?>(null) }

    fun makeBotMove() {
        if (currentPlayer == "O" && winner == null) {
            val emptyCells = mutableListOf<Pair<Int, Int>>()
            for (i in 0 until 3) {
                for (j in 0 until 3) {
                    if (board[i][j].isEmpty()) {
                        emptyCells.add(Pair(i, j))
                    }
                }
            }

            if (emptyCells.isNotEmpty()) {
                val (row, col) = emptyCells.random()
                board[row][col] = "O"

                if (checkWinner(board, "O")) {
                    winner = "O"
                } else if (board.all { row -> row.all { it.isNotEmpty() } }) {
                    winner = "Ничья"
                } else {
                    currentPlayer = "X"
                }
            }
        }
    }

    LaunchedEffect(currentPlayer) {
        if (currentPlayer == "O" && winner == null) {
            kotlinx.coroutines.delay(500) 
            makeBotMove()
        }
    }

    Column(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = if (winner != null) "Победил: $winner" else "Ход: $currentPlayer",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold,
            color = if (winner != null) Color.Green else Color.Black
        )
        Spacer(modifier = Modifier.height(16.dp))
        Board(board, onCellClick = { row, col ->
            if (board[row][col].isEmpty() && winner == null && currentPlayer == "X") {
                board[row][col] = currentPlayer

                if (checkWinner(board, currentPlayer)) {
                    winner = currentPlayer
                } else if (board.all { row -> row.all { it.isNotEmpty() } }) {
                    winner = "Ничья"
                } else {
                    currentPlayer = "O"
                }
            }
        })
        Spacer(modifier = Modifier.height(16.dp))
        if (winner != null) {
            Button(
                onClick = {
                    board = Array(3) { Array(3) { "" } }
                    currentPlayer = "X"
                    winner = null
                },
                shape = RoundedCornerShape(8.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Color.Blue)
            ) {
                Text(text = "Начать заново", color = Color.White)
            }
        }
    }
}

@Composable
fun Board(board: Array<Array<String>>, onCellClick: (Int, Int) -> Unit) {
    Column(
        modifier = Modifier.padding(8.dp),
        verticalArrangement = Arrangement.Center
    ) {
        for (row in 0 until 3) {
            Row(
                horizontalArrangement = Arrangement.Center
            ) {
                for (col in 0 until 3) {
                    Cell(board[row][col], onClick = { onCellClick(row, col) })
                }
            }
        }
    }
}

@Composable
fun Cell(value: String, onClick: () -> Unit) {
    Button(
        onClick = onClick,
        modifier = Modifier.size(80.dp).padding(4.dp),
        shape = RoundedCornerShape(8.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = Color.LightGray,
            disabledContainerColor = if (value == "X") Color.LightGray.copy(alpha = 0.8f) 
                                  else Color.LightGray.copy(alpha = 0.8f)
        ),
        enabled = value.isEmpty()
    ) {
        Text(
            text = value,
            fontSize = 32.sp,
            fontWeight = FontWeight.Bold,
            color = if (value == "X") Color.Red else Color.Blue
        )
    }
}

fun checkWinner(board: Array<Array<String>>, player: String): Boolean {
    for (i in 0 until 3) {
        if (board[i][0] == player && board[i][1] == player && board[i][2] == player) return true
        if (board[0][i] == player && board[1][i] == player && board[2][i] == player) return true
    }
    if (board[0][0] == player && board[1][1] == player && board[2][2] == player) return true
    if (board[0][2] == player && board[1][1] == player && board[2][0] == player) return true

    return false
}
