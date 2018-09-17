# Generated by Django 2.0.8 on 2018-09-16 18:18

import django.contrib.postgres.fields.jsonb
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import libs.blacklist
import re
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0009_auto_20180908_1512'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExperimentChartView',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, default=None, max_length=256, null=True, validators=[django.core.validators.RegexValidator(re.compile('^[-a-zA-Z0-9_]+\\Z'), "Enter a valid 'slug' consisting of letters, numbers, underscores or hyphens.", 'invalid'), libs.blacklist.validate_blacklist_name])),
                ('created_at', models.DateTimeField(auto_now_add=True, db_index=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('charts', django.contrib.postgres.fields.jsonb.JSONField()),
                ('experiment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chart_views', to='db.Experiment')),
            ],
            options={
                'ordering': ['created_at'],
                'verbose_name_plural': 'Experiment Chart Views',
            },
        ),
        migrations.CreateModel(
            name='ExperimentGroupChartView',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, default=None, max_length=256, null=True, validators=[django.core.validators.RegexValidator(re.compile('^[-a-zA-Z0-9_]+\\Z'), "Enter a valid 'slug' consisting of letters, numbers, underscores or hyphens.", 'invalid'), libs.blacklist.validate_blacklist_name])),
                ('created_at', models.DateTimeField(auto_now_add=True, db_index=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('charts', django.contrib.postgres.fields.jsonb.JSONField()),
                ('experiment_group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chart_views', to='db.ExperimentGroup')),
            ],
            options={
                'ordering': ['created_at'],
                'verbose_name_plural': 'Experiment Group Chart Views',
            },
        ),
        migrations.AlterModelOptions(
            name='experimentgroupstatus',
            options={'verbose_name_plural': 'Experiment Group Statuses'},
        ),
    ]