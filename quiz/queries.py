from django.db import connection
import pdb

def get_questions(subject, question_type):
    cursor = connection.cursor()
    query = """
			SELECT question, id, options, answer, image FROM questions WHERE Subject = '{0}' AND Question_Type = '{1}';
    		""".format(subject, question_type)
    cursor.execute(query)
    row = cursor.fetchall()
    cursor.close()
    return row

def save(subject, score, total, date):
	cursor = connection.cursor()
	query = """INSERT INTO results( subject, Score, Total_Score, Answer_time)  VALUES ('{0}', '{1}', '{2}', '{3}');""".format(subject, score, total, date)
	cursor.execute(query)
	row = cursor.fetchall()
	cursor.close()
	return row


def get_desc():
    cursor = connection.cursor()
    query = """ 
            SELECT
            a.subject,
			ROUND(MIN(COALESCE(Score, 0)),2) minimum,
            ROUND(AVG(COALESCE(Score, 0)),2) average,
            ROUND(MAX(COALESCE(Score, 0)),2) maximum			
            FROM results  a
            GROUP BY a.subject
            """
    cursor.execute(query)
    row = cursor.fetchall()
    cursor.close()
    return row


def get_timeline(subject):
    cursor = connection.cursor()
    query = """ 
           SELECT 
			substr(Answer_time,0,10) answer_date,
            Score
			FROM results
			 WHERE  Subject = '{0}'
            """.format(subject)
    cursor.execute(query)
    row = cursor.fetchall()
    cursor.close()
    return row

