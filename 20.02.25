@Composable
fun ParticipantsList(participants: List<String>) {
    Column(modifier = Modifier.padding(16.dp)) {
        for (index in participants.indices) {
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 4.dp),
                elevation = CardDefaults.elevation(4.dp)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Text(text = "${index + 1} место")
                    Text(text = participants[index])
                }
            }
        }
    }
}

@Composable
fun MyApp() {
    val participants = listOf("Иванов", "Петров", "Сидоров", "Кузнецов", "Смирнов")

    ParticipantsList(participants)
}



@Composable
fun EvenNumbersList() {
    val evenNumbers = remember { mutableStateListOf(*Array(100) { it * 2 }) }

    LazyColumn(modifier = Modifier.padding(16.dp)) {
        items(evenNumbers) { number ->
            Button(
                onClick = {
                    evenNumbers.remove(number) 
                },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 4.dp)
            ) {
                Text(text = number.toString())
            }
        }
    }
}

@Composable
fun MyApp() {
    EvenNumbersList()
}
