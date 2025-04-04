package com.example.myapplication

import android.util.Log
import android.widget.Toast
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.room.Dao
import androidx.room.Database
import androidx.room.Entity
import androidx.room.Insert
import androidx.room.PrimaryKey
import androidx.room.Query
import androidx.room.Room
import androidx.room.RoomDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.launch

// Сущность для таблицы "Покупки"
@Entity(tableName = "purchase")
data class Purchase(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val name: String, // Название товара
    val price: Double // Цена товара
)

// DAO для работы с таблицей покупок
@Dao
interface PurchaseDao {
    @Insert
    suspend fun insert(purchase: Purchase)

    @Query("SELECT * FROM purchase ORDER BY id ASC")
    fun getAll(): Flow<List<Purchase>>
}

// База данных
@Database(entities = [Purchase::class], version = 2, exportSchema = false) // Увеличили версию с 1 до 2
abstract class AppDatabase : RoomDatabase() {
    abstract fun purchaseDao(): PurchaseDao

    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null

        fun getDatabase(context: android.content.Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "app_database"
                )
                    .fallbackToDestructiveMigration() // Очистка старой базы данных при изменении схемы
                    .build()
                INSTANCE = instance
                Log.d("AppDatabase", "Database initialized")
                instance
            }
        }
    }
}

// Экран для работы с покупками
@Composable
fun PurchaseScreen() {
    val context = LocalContext.current
    val db = remember {
        try {
            AppDatabase.getDatabase(context)
        } catch (e: Exception) {
            Log.e("PurchaseScreen", "Error initializing database: ${e.message}")
            null
        }
    }
    val dao = db?.purchaseDao()

    var name by remember { mutableStateOf("") } // Поле для названия товара
    var price by remember { mutableStateOf("") } // Поле для цены
    val purchases by dao?.getAll()?.collectAsState(initial = emptyList()) ?: remember { mutableStateOf(emptyList()) } // Безопасное получение списка

    val scope = rememberCoroutineScope()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        // Поле для ввода названия товара
        TextField(
            value = name,
            onValueChange = { name = it },
            label = { Text("Название товара") },
            modifier = Modifier.fillMaxWidth()
        )

        Spacer(modifier = Modifier.height(8.dp))

        // Поле для ввода цены
        TextField(
            value = price,
            onValueChange = { price = it },
            label = { Text("Цена") },
            modifier = Modifier.fillMaxWidth()
        )

        Spacer(modifier = Modifier.height(16.dp))

        // Кнопка добавления
        Button(
            onClick = {
                scope.launch {
                    try {
                        val priceValue = price.toDoubleOrNull()
                        if (name.isNotBlank() && priceValue != null && dao != null) {
                            dao.insert(Purchase(name = name, price = priceValue))
                            Log.d("PurchaseScreen", "Inserted: $name, $priceValue")
                            name = "" // Очищаем поля после добавления
                            price = ""
                        } else {
                            Toast.makeText(context, "Введите корректные данные", Toast.LENGTH_SHORT).show()
                            Log.w("PurchaseScreen", "Invalid input or DAO is null")
                        }
                    } catch (e: Exception) {
                        Log.e("PurchaseScreen", "Error inserting purchase: ${e.message}")
                        Toast.makeText(context, "Ошибка: ${e.message}", Toast.LENGTH_SHORT).show()
                    }
                }
            },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text("Добавить покупку")
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Отображение списка покупок
        Column(modifier = Modifier.weight(1f)) {
            purchases.forEach { purchase ->
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 4.dp)
                ) {
                    Row(
                        modifier = Modifier
                            .padding(8.dp)
                            .fillMaxWidth(),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = purchase.name,
                            modifier = Modifier.weight(1f) // Название занимает доступное место
                        )
                        Text(
                            text = "${purchase.price} ₽", // Цена с символом валюты
                            modifier = Modifier.padding(start = 8.dp)
                        )
                    }
                }
            }
        }
    }
}
